using System;
using System.Collections.Generic;
using System.Text;
using TopTrumps.Web.Models;

namespace TopTrumps.Core.StarWarsApi.Models
{
    public class Deck
    {
        public List<Starship> Ships { get; set; } = new List<Starship>();
    }
}
