    const Discovery = require('watson-developer-cloud/discovery/v1');

    const discovery = new Discovery({
    version: '2018-08-01',
    iam_apikey: '{{AQUI VAI A API_KEY DO SERVIÇO}}'
    });

    const req = {
        environment_id: '{{ENV da sua collection criada}}',
        collection_id: '{{ID da Collection criada}}',
        natural_language_query: '{{Texto em linguagem natural para busca}}',
      };


        if(saidaDoAssistant.output.nodes_visited && saidaDoAssistant.output.nodes_visited[0] == "Em outros casos"){
            const reqDiscovery = {
            environment_id: '8cf9c3a5-a62f-496d-92f1-dcec3a1810b4',
            collection_id: '29c3a3e7-de39-4d68-bf43-b9ef7cbd4497',
            natural_language_query: msgDoUsuario,
            }; 
            
        
            let resultadoDiscovery = sdkDiscovery.query(reqDiscovery);
            let resultadoDiscoveryFiltrado = filtrarResultadoDiscovery(resultadoDiscovery); //extrai somente 
            
    
            saidaDoAssistant.output.text = saidaDoAssistant.output.text.concat(resultadoDiscoveryFiltrado);
            return saidaDoAssistant;
        }