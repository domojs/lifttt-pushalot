module.exports={
    name:"pushalot", 
    "trigger":{}, 
    "actions":[
        {
            name:"send", 
            fields:[
                { name:"AuythorizationToken", displayName:"Token"},
                { name:"Body", displayName:"Body"},
            ],
            delegate:function(fields){
                var result=function(fields){
                    console.log(fields);
                    $.ajax({type:'post', contentType:'application/json', dataType:'json', data:fields, url:"https://pushalot.com/api/sendmessage", success:function(result){
                        console.log(result.Description);
                    },error:function(err){
                        console.log(err);
                    }});
                };
                result.fields=fields;
                return result;
            }
        }
    ]
};