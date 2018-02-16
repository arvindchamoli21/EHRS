using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeWebAPI.Controllers
{
    
    public class EmployeeController : ApiController
    {
        public IEnumerable<Employee> GetEmployee()
        {
            using (TestEntities dbcontext = new TestEntities())
            {
                return dbcontext.Employees.ToList();
            }
        }

        public Employee GetEmployee(string id)
        {
            using (TestEntities dbcontext = new TestEntities())
            {
                return dbcontext.Employees.Where(m => m.code == id).FirstOrDefault();
            }
        }
    }
}
