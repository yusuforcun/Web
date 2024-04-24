using form.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Drawing;
using Microsoft.AspNetCore.Http;

namespace form.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }


        [HttpPost]
        public IActionResult Index(IFormCollection collection)
        {
            string okulno = collection["okulno"];
            string ad = collection["ad"];
            string soyad = collection["soyad"];
            string sinif = collection["sinif"];
            return Content(okulno + "-" + ad + "-" + soyad + "-" + sinif);
        }





        }
}
