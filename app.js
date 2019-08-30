const AssistantV1 = require('watson-developer-cloud/assistant/v1')
const express = require('express');
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.json());
app.use(express.static('./public'));

const port = 3000;

const assistant = new AssistantV1({
    version: '2019-02-28',
    iam_apikey: 'E8t7u2-JjM79_WGS1j9sF4-C_cTyD0BpyCaxVQ1B0dV6',
    url: 'https://gateway.watsonplatform.net/assistant/api'
})

app.post('/conversation/', (req, res)=>{
    const { text, context = {}} = req.body;
    
    const params = {
        input: { text },
        workspace_id:'9d828ca9-7bb3-4a10-a870-0c4f450990e2',
        context,
    };
    
    assistant.message(params,(err, response)=>{
        if(err){
            console.error(err);
            res.status(500).json(err)
        }else{
            res.json(response);
            
        }
    });

});



app.listen(port, () => console.log(`PCDbot rodando na porta ${port}`))



