using System;

namespace ClientDotNet
{
    class Program
    {
        static void Main(string[] args)
        {
            var client = new GraphQLClient("http://localhost:4000");
            var query = @"
    query { 
        houses{id name words}
    }
";

            var delete = @"
   mutation deleteHouse($id: ID!) {deleteHouse(id: $id){id name words}}
";

            var getHouse = client.Query(query, null).Get("houses");
            if (getHouse != null)
            {
                foreach (var house in getHouse)
                {
                    Console.WriteLine($"id : ${house.id}, name : ${house.name}, words : ${house.words}");
                }
            }
            else
            {
                Console.WriteLine("Null :(");
            }

            var deleteHouse = client.Query(delete, new { id = 5 }).Get("deleteHouse");
            if (deleteHouse != null)
            {
                foreach (var house in deleteHouse)
                {
                    Console.WriteLine($"id : ${house.id}, name : ${house.name}, words : ${house.words}");
                }
            }
            else
            {
                Console.WriteLine("Null :(");
            }

            Console.ReadKey();
        }
    }
}
