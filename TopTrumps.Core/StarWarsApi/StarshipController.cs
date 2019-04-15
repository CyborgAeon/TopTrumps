using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using TopTrumps.Core.StarWarsApi.Models;
using TopTrumps.Web.Models;

namespace TopTrumps.Web.Controllers
{
    public class StarshipService
    {
        const string endpoint = "https://swapi.co/api/";
        public async Task<List<Starship>> GetShips()
        {
            int pageNo = 1;
            HttpClient client = new HttpClient();
            List<Starship> starshipList = new List<Starship>();
            var moreShips = true;
            while (moreShips)
            {
                var response = await client.GetAsync($"{endpoint}starships/?page={pageNo}");
                var content = await response.Content.ReadAsStringAsync();
                ApiResponse starships = JsonConvert.DeserializeObject<ApiResponse>(content);
                starshipList.AddRange(starships.Results);
                if (starships.Next == null)
                {
                    moreShips = false;
                }
                pageNo++;
            } 
            return starshipList;
        }
        public async Task<List<Deck>> BuildDecks()
        {
            var shipList = await GetShips();
            var shuffledShips = ShuffleShips(shipList);
            Deck playerDeck = new Deck();
            Deck aiDeck = new Deck();
            for (int currentShip = 0; currentShip < shuffledShips.Count(); currentShip++)
            {
                aiDeck.Ships.Add(shuffledShips[currentShip]);
                currentShip++;
                if (shuffledShips.Count != currentShip)
                {
                   playerDeck.Ships.Add(shuffledShips[currentShip]);
                }
            }
            List<Deck> decks = new List<Deck>();
            decks.Add(playerDeck);
            decks.Add(aiDeck);
            return decks;
        }
        public List<Starship> ShuffleShips(List<Starship> starships)
        {
            Random random = new Random();
            return starships.OrderBy(e => random.Next()).ToList();
        }
    }
}