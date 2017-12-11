var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var express = require('express');
var app = express();
var cors = require('cors');
var Web3 = require('web3');
var web3 = new Web3();
var path = require('path');	
var http = require('http');
    
web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8085"));

var abi = [{"constant":true,"inputs":[],"name":"getName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"n","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

var contadd = "0x8c0a5418af9d1fb11e00151e37e0f5b0ab272611";

var con = web3.eth.contract(abi).at(contadd);

app.use(cors());  
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));

// Below you can write API for the functions in the Smart Contract.
