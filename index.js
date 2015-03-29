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
                    $.ajax({type:'post', dataType:'json', data:fields, url:"https://pushalot.com/api/sendmessage", success:function(result){
                        console.log(result.Description);
                    },error:function(){
                        console.log(arguments);
                    }});
                };
                result.fields=fields;
                return result;
            }
        }
    ]
};