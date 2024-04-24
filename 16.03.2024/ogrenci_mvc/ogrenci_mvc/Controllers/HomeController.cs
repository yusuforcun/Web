using Microsoft.AspNetCore.Mvc;
using ogrenci_mvc.Models;
using System.Diagnostics;

namespace ogrenci_mvc.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Index(Ogrenci ogrenci)
        {
            string ad = ogrenci.ogrenciadi;
            string soyad = ogrenci.ogrencisoyadi;
            string sinif = ogrenci.sinif;
            return Content(ad + "-" + soyad + "-" + sinif);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
