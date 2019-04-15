using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TopTrumps.Web.Models
{
    [JsonObject]
    public class ApiResponse
    {
        public int Count { get; set; }
        public string Next { get; set; }
        public string Previous { get; set; }
        public List<Starship> Results { get; set; }
    }
}
