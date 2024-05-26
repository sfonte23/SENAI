namespace ProjetoLista;
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");

        ClientesPF cl1 = new ClientesPF();
        cl1.id = 1;
        cl1.nome="Ana";

        ClientesPF cl2 = new ClientesPF();
        cl2.id=2;
        cl2.nome="Bruno";
        // Dessa forma acima é impossível pois fica inviável se tivermos muitos dados, vamos criar abaixo como lista.

        List<ClientesPF> lista=new List<ClientesPF>();

        lista.Add(new ClientesPF() );
        lista.Add(cl1);
        lista.Add( new ClientesPF() {id=3,nome="Sérgio"} );

        foreach( ClientesPF aux in lista){

            System.Console.WriteLine("Clientes: {0}", aux.nome);
        }
    }
}
