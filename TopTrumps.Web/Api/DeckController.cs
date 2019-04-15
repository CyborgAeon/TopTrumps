using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TopTrumps.Core.StarWarsApi.Models;
using TopTrumps.Web.Controllers;

namespace TopTrumps.Web.Api
{
    [Route("api/deck")]
    public class DeckController : Controller
    {
        [Route("")]
        public async Task<List<Deck>> GetDecks()
        {
            StarshipService starshipService = new StarshipService();
            var decks = await starshipService.BuildDecks();
            return decks;
        }
    }
}