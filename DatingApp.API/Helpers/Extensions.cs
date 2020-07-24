using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            //DISPLAYING MESSAGE WITH APPLICATION-ERROR TITLE
            response.Headers.Add("Application-Error", message);
            // THIS ALLOWS MESSAGE ABOVE TO BE DISPLAYED
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}