using System;
using TopTrumps.Web.Controllers;
using TopTrumps.Web.Models;
using Xunit;

namespace TopTrumps.Core.Tests
{
    public class ApiTests
    {
        [Fact]
        public void CheckPages()
        {
            //arrange
            StarshipService starshipService = new StarshipService();
            //act
            var apiResponse = starshipService.GetShips().Result;
            //assert
            Assert.True(apiResponse.Count == 37);
        }
        [Fact]
        public void CheckDecks()
        {
            //arrange
            StarshipService starshipService = new StarshipService();
            //act
            var decks = starshipService.BuildDecks().Result;
            //assert
            Assert.True(decks[0].Ships.Count > 0 && decks[1].Ships.Count > 0);
        }
    }
}
