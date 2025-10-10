
export function deleteCompanies(){
  return await fetchData({
        url: '/company',
        method: "GET",
      })
}
export function deleteCompany(){
  
}