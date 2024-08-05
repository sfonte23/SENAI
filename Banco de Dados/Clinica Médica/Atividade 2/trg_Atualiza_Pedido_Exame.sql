-- gatilho de c�lculo de valor a pagar da tabela pedido_exame 
create trigger Atualiza_Pedido_Exame
	on pedido_exame
	after insert
	as
    begin 
		SET NOCOUNT ON
		declare @num_ped as integer;
		-- captura numero do pedido do registro inserido
		select @num_ped = numero_pedido from inserted;
		declare @num_cons as integer;
		-- captura numero da consulta do registro inserido
		select @num_cons = fk_consulta_numero_consulta from inserted;
		declare @cod_ex as integer;
		-- captura codigo exame do registro inserido
		select @cod_ex = fk_exame_codigo from inserted;
		declare @prc as money;
		-- busca pre�o do exame 
		select @prc = preco from exame where codigo = @cod_ex;
		declare @cpf_pac as varchar(20);
		-- busca CPF paciente
		select @cpf_pac = fk_paciente_cpf from consulta where numero_consulta = @num_cons;
		declare @tp_plan as varchar(20);
		-- busca tipo de plano de sa�de do paciente
		select @tp_plan = tipo_plano from paciente where cpf = @cpf_pac;
		-- print 'N�mero Pedido: ' + convert(varchar(30),@num_ped);
		-- print 'N�mero Consulta: ' + convert(varchar(30),@num_cons);
		-- print 'C�digo Exame: ' + convert(varchar(30),@cod_ex);
		-- print 'Pre�o Exame: ' + convert(varchar(30),@prc);
		-- print 'CPF Paciente: ' + @cpf_pac;
		-- print 'Tipo Plano: ' + @tp_plan;

		-- plano Especial
		if @tp_plan = 'Especial'
		begin
				update pedido_exame set valor_pagar = @prc - @prc * 100 / 100 where numero_pedido = @num_ped;
		end
		-- plano Padr�o
		if @tp_plan = 'Padr�o'
		begin
				update pedido_exame set valor_pagar = @prc - @prc * 30 / 100 where numero_pedido = @num_ped;
		end
		-- plano B�sico
		if @tp_plan = 'B�sico'
		begin
				update pedido_exame set valor_pagar = @prc - @prc * 10 / 100 where numero_pedido = @num_ped;
		end
		print 'Trigger (Atualiza Pedido de Exame) Encerrada';
	end


	-- drop trigger Atualiza_Pedido_Exame;
