
export const catogrizedDataRichListSummary = (data) => {

        console.log( data)
         let tmp =  data

         let x = []

         

         for (let index = 0; index < tmp.length; index++) {
           const element = tmp[index];
           x[index] = [
            element.address, element.name,element.holdersCount,element.totalSupply
           ]
         }
     
         console.log("X ",x)
     
     
         return x
}


export const catogrizedDataRichListPortfolio = (data) => {

   console.log( "DATAComing ",data)
   let tmp =  data.tokens

   let x = []

   

   for (let index = 0; index < tmp.length; index++) {
     const element = tmp[index].tokenInfo;
     x[index] = [
      element.address, element.name,tmp[index].balance, element && element.price && element.price.availableSupply ?element.price.availableSupply : "NOT AVAILABLE", element && element.price && element.price.marketCapUsd ? element.price.marketCapUsd  : "NOT AVAILABLE", element && element.price && element.price.rate ? element.price.rate  : "NOT AVAILABLE", element && element.price && element.price.volume24h ? element.price.volume24h  : "NOT AVAILABLE", element && element.price && element.price.volDiff7 ? element.price.volDiff7  : "NOT AVAILABLE"
     ]
   }

   console.log("X ",x)


   return x
}