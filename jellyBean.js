  var Jellybean = function(){
            var bean = {
                
                   getValue : function(){ 
                    
                    //gets value from the input field
                    return document.getElementById("bean").value.trim(); 
                    
                    },
                    
                    clearValue : function(){
                        document.getElementById("bean").value = ""; 
                        
                    },
                    
                     beanHTML : function(){ 
                        //Html template for the jellybean
                        return "<div class='bean'><input type='hidden' name='bean[]' value='"
                        + this.getValue() + 
                        "'><span class='beanContent'>" + this.getValue() + "</span><span class='remove'>&#xd7;</span></div>";     
                    },
                     
                 appendHtml : function(){
                     
                      var formField = document.getElementById("formfield");
                       //append jellybean to DOM
                          formField.innerHTML += this.beanHTML();
                          
                          //clear field
                        this.clearValue();
                 },  
                       
                clickElement : function(event){  
             
                    if(event.target.id == "addBean" && this.getValue() != ""){
                      
                            this.appendHtml();
                         
                        }
                        
                        if(event.target.className == "remove"){
                            //remove item
                          event.target.parentNode.style.display="none";
                            
                           }
                    },
                    
                          formSubmit : function(event){
                     //enter key press will add a jellybean and not submit the form
                                      
                     if(event.keyCode == 13 || event.which == 13)
                     {
                         this.appendHtml();
                         event.preventDefault()
                         
                         
                     }
                     
                     
                    },              
                
            }
            
            return bean
        }      
        
        var jelly = new Jellybean();