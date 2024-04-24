using Microsoft.AspNetCore.Mvc;
using post_mvc.Models;
using System.Diagnostics;

namespace post_mvc.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(string okulno, string ad, string soyad, string sinif)
        {
            return Content(okulno + "-" + ad + "-" + soyad + "-" + sinif);

        }
    }
