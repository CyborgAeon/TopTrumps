using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TopTrumps.Web.Models
{
    [JsonObject]
    public class Starship
    {
        [JsonProperty("cost_in_credits")]
        public string CostInCredits { get; set; }
        [JsonProperty("hyperdrive_rating")]
        public string HyperdriveRating { get; set; }
        public string MGLT { get; set; }
        public string[] Films { get; set; }
        public string Crew { get; set; }
    }
}
