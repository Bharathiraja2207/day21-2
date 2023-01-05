var tamilnadu="https://api.data.gov.in/resource/edf54914-06c6-4deb-bd1a-772d32250f3f?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"

async function tamilnadu1(){
    var url_fetch=await fetch (tamilnadu)
   // console.log(url_fetch)
    var result=  url_fetch.json()
    var endresult3=await result
   // console.log(endresult3)
    var data=endresult3.records
console.log(data)
    for(let i of data){
       var district_name=i.name_of_the_district
       console.log(district_name)
       var civil_cases =i.civil_cases
       console.log( civil_cases)
       var criminal_casese=i.criminal_cases
       var total_pendency=i.total_pendency
      console.log(total_pendency)
      // console.log(country,id,launch_date,launcher)
       var parrent3=document.createElement('div')
       parrent3.setAttribute('class','card row col-lg-3 col-sm-12')
        parrent3.innerHTML=`
            <div class="head">
                <h3>${district_name}</h3>
                </div>
                <div class="body">
                    <p><b>civil_cases:</b>${civil_cases}</p>
                    <p><b>criminal_cases:</b>${criminal_casese}</p>
                    <p><b>total_pendency:</b>${total_pendency}</p>
                </div>

        `
        document.querySelector('body').append(parrent3)

     }

}
tamilnadu1()
