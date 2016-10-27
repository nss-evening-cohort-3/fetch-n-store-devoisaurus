using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GetFetchStore.Startup))]
namespace GetFetchStore
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
