(function() {
    'use strict'
    
    let dominion;
    $(window).on('load', function() {
        //create table
        createTable()
        //onClick the submit button
        $('#submit_button').on('submit', randomize)
    })

    function createTable() {

        // creates a <table> element and a <tbody> element
        let tbl = document.createElement('table');
        tbl.id = "card_tbl"
      
        //Create the title of the table
        let tblheader = document.createElement('thead');
        tbl.appendChild(tblheader)
      
        let tblBody = document.createElement('tbody');
        tblBody.id = "tableBody"
      
        //puts the created table into the HTML document
        tbl.appendChild(tblBody);
        document.getElementById('cards_div').appendChild(tbl);
        tbl.setAttribute("border", "2");
      }


    function addRow(imageURL) {
        table = document.getElementById('card_tbl')
        let contentrow = document.createElement('tr')
        contentrow.innerHTML = `<img src="${imageURL}"></img>`       
        table.appendChild(contentrow)
    }

    function randomize(){
        addRow('https://wiki.dominionstrategy.com/images/thumb/d/d9/Ferry.jpg/320px-Ferry.jpg');
    }
})()
