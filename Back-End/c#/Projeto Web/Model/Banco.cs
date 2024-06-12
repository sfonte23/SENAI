using System.Data.SqlClient;
class Banco
{
  public string mensagem = "Olá Banco!";

  private List<Pessoa> lista = new List<Pessoa>();
  public void carregarBanco()
  {
    try
    {

      SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder(
        "User ID = sa;Password=123456;" +
        "Server = Localhost\\SQLEXPRESS;" +
        "DataBase = projetoclientes;" +
        "Trusted_Connection = False;"

      );
      using (SqlConnection conexao = new SqlConnection(builder.ConnectionString))
      {
        string sql = "Select * from clientes";
        using (SqlCommand comando = new SqlCommand(sql, conexao))
        {
          conexao.Open();
          using (SqlDataReader tabela = comando.ExecuteReader())
          {
            while (tabela.Read())
            {
              //System.Console.WriteLine(tabela["nome"]);
              lista.Add(
                new Pessoa()
                {
                  id = Convert.ToInt32(tabela["id"]),
                  nome = tabela["nome"].ToString()
                }
              );
            }
          }
        }
      }
    }
    catch (Exception e)
    {
      System.Console.WriteLine("Erro" + e.ToString);
    }
  }

  public List<Pessoa> GetLista()
  {
    return lista;
  }
}