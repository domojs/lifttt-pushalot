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
                    console.log('puhsalot1');
                    console.log(fields);
                var result=function(fields){
                    console.log('puhsalot2');
                    console.log(fields);
                    $.ajax({type:'post', contentType:'application/json', dataType:'json', data:fields, url:"https://pushalot.com/api/sendmessage", success:function(result){
                        console.log(result.Description);
                    },error:function(){
                        console.log(arguments[0]);
                    }});
                };
                result.fields=fields;
                return result;
            }
        }
    ]
};