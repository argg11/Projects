const express = require('express');
const router = express.Router();
const Person = require("./../model/Person");

    router.get('/',async(req,res)=>{
    try{
    const data = await Person.find();
    console.log('here is ur data');
    res.status(200).json(data);
    }
    catch(err){
      console.log("internal error")
    }
  
  
  })
  
  router.post('/', async(req, res) => { 
  
    try {
      const data = req.body
  
      const newPerson = new Person(data);
    
      const response = await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
        
    } catch (err) {
  
      console.log(err);
      res.status(500).json({error:'sry Internal err'});
  
    }
  
    })
  router.get('/:workType', async(req, res) => {
    
    try {
      
      const workType = req.params.workType;
      
      if(workType=='hr'|| workType=='manager'||workType=='chef'||workType=='employee')
        {
          const response = await Person.find({work:workType});
          console.log('successfully fetched '+ workType);
          res.status(200).json(response);
        }
      else{
        res.status(404).json({error:'not found'});
          } 
    } catch (err) {
  
      console.log(err);
      res.status(500).json({error:'sry Internal err'});
  
    }
  
  })


    router.put('/:id',async (req,res)=>{

        try {
                const personId = req.params.id;
                const updatedPersonData  = req.body;

                const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{new:true ,runValidators:true});
            
                if(!response){
                    res.status(404).json({error:'NOT FOUND'});
                }
                console.log('data updated');
                res.status(200).json('DATA UPDATED \n'+ response);

        } catch (err){
            console.log(err);
            res.status(500).json({error:'sry Internal err'});
        }

    })

    router.delete('/:id',async(req,res)=>{

        try{ 
        const Personid = req.params.id;

            const response = await Person.findByIdAndDelete(Personid);

            if(!response){
                res.status(404).json({error:'NOT FOUND'});
                
            }
            console.log("deletion success");
            res.status(200).json(response+'deletion success');        
        }
            
            catch(err){
                console.log(err);
            res.status(500).json({error:'sry Internal err'});
            }
        })

















  module.exports = router;