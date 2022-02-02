export async function getCF(url: string){
  const res = await fetch(url)
  if(res.ok){
    const json = await res.json()
    if(json['status'] == "OK"){
      return json;
    }
  }
  throw("Could not fetch data from codeforces")
}