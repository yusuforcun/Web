using Microsoft.AspNetCore.Mvc;
using mvc_yusuf.Models;
using System.Diagnostics;

namespace mvc_yusuf.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [HttpGet]
        public IActionResult VeriAlGet() 
        {
            int okulno = int.Parse(HttpContext.Request.Query["okulno"]);
            
            string ad = HttpContext.Request.Query["ad"];

            string soyad = HttpContext.Request.Query["soyad"];

            string sinif = HttpContext.Request.Query["sinif"];

            return Content (okulno+"-"+ad+"-"+soyad+"-"+sinif);
            
            }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View();
        }
    }
}
