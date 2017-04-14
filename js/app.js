$(document).ready(function(){
    var source = $('#templateBody-template').html();
    //console.log(source);
    var template = Handlebars.compile(source);
  
   
    //  Handlebars.registerHelper("order", function(data, options){
    //      var address = data;
    //      console.log(address);
    //      return data;
    //  })

     Handlebars.registerHelper("subtotal", function(data, options){
         console.log(data);
         var product=data.data.root.products;
         var subtotal = 0;
        
         for(var i=0; i < product.length; i++){
             //console.log(product[i].ordPrice);
             subtotal += parseFloat(product[i].ordPrice);            
         }
         return subtotal;        
     })

     Handlebars.registerHelper("shipping", function(){
         return parseFloat("4.95");
     })

      Handlebars.registerHelper("ordTotal", function(data){
          console.log(data);
         var product=data.data.root.products;
         var total = 0;
         var shipping = 4.95;

         for(var i=0; i < product.length; i++){ 
             total += parseFloat(product[i].ordPrice);            
         }        
         return (total + shipping);
      })
    
    Handlebars.registerHelper("prod", function(data){
        console.log(data)
        var prod = data.data;
    })
    var products = {products: product[0].products[1].content}
    var productHtml = template(products);
    //var productHtml = template({products: product});

    $("#templateBody").append(productHtml);   

    // var shippingAddress = $('#shippingAddress-template').html();
    // var shippingTemplate = Handlebars.compile(shippingAddress);   

    // var shippingHtml = template({shippingAddress: product[2].orders[2].content});

    // Handlebars.registerHelper("shippingAddress", function(data){
    //     console.log(data);
    // })
    // $("#shppingTemplateBody").append(shippingHtml);

    $.getJSON('js/data.json', function(data){
        console.log(data.message.merge_vars[0].vars[1].content);
        //var pro = data.message.merge_vars[0].vars[1];
        //Handlebars.registerHelper("prod", function (pro) {
        //    console.log(pro)
        //})

        var products = data.message.merge_vars[0].vars[1].content;
        console.log(products);


    })
})

