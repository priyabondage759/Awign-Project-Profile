import React, { useState } from 'react'
import "./Profile.css"

export function ProfileList() {

  const [userName, setUserName] = useState('')
  const [data, setData] = useState(null)
  const [repositories, setRepositories] = useState([])

  const handleUsers = (e) => {
    setUserName(e.target.value)
    // console.log('username', e.target.value)
  }

  // const handleSubmit = (e)=>{
  //   e.preventDefault();
  //   fetch(`https://api.github.com/users/${userName}`)
  //   .then((res)=>{ return res.json()} )
  //   .then((val)=>{
  //   // console.log(val)
  //   setData(val);
  //   setRepository(val.repos_url);
  //   console.log(val.repos_url)
  //   }
  //   )
  // }

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${userName}`);
    const profileJson = await profile.json();
    // console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (

    <div className='main-body'>
      <div className='container my-2'>



        <div className='.row-mt-2'>
          <h1 className='display-4 mb-2'>GitHub User Profile</h1>



        </div>

        <div className='row'>
          <div className='col-md-6 mx-auto text-center'>
            <div className='row mb-5 justify-content-center'>
              <form id='myform' autoComplete='off' onSubmit={submitHandler} >
                <div className='col-lg-8 col-sm-12 my-2 form-group'>
                  <input className='col-lg-8 col-sm-12 my-2 form-control form-control-lg' type='text' placeholder='Enter' value={userName} onChange={handleUsers} />
                </div>

                <div className='col-lg-3 col-sm-12 my-2 form-group'>

                  <button className='btn btn-primary mb-3 btn-block w-100 btn-lg'>
                    Search
                  </button>

                </div>
              </form>
            </div>
          </div>

        </div>





      </div>

      {/* display dsta list */}

      {data && <div>

        <div className='container mb-5 main-list'>

          <div className="card main" style={{ width: "80rem" }}>


            <div className='card-p-3 sect'>

              <div className='d-flex ailgn-items-center mb-5'>

                <div>


                </div>
                <div className='image'>
                  <img src={data.avatar_url} className='rounded' width='255' />
                </div>

                <div className="card-body namebody">


                  <div className='ml-3 w-100'>
                    <div className='d-flex ailgn-items-center' id='namegit'>
                      <h2 className='mb-5 mt-0 ml-2 p-3'> {data.name}</h2>

                    </div>

                  </div>



                  <div className='ml-3 w-100'>
                    <div className='d-flex ailgn-items-center'>
                      <h4 className='mb-5 mt-0 ml-2 p-3'> {data.Description}</h4>

                    </div>

                  </div>


                  <div className='d-flex flex-column ailgn-items-center mb-5 repo-data'>
                    
                      <div className='d-inline-flex ailgn-items-center mb-3'>

                           <div className='row'>
                            <div className='col-md-12'>
                        <table className="table table-striped table-hover table-danger">

                          <thead>
                            <tr>
                             
                              <th scope="col">Language</th>
                              <th scope="col">Watchers Count</th>
                              <th scope="col">Created At</th>
                              <th scope="col">Updated At</th>
                            </tr>
                          </thead>

                          <tbody>
                            {repositories.map((x,i)=>{
                              return <tr key={i}>
                                  <td>{x.language}</td>
                              <td>{x.watchers_count}</td>
                              <td>{x.created_at}</td>
                              <td>{x.updated_at}</td>

                              </tr>
                            })}
                            <tr>
                              
                            
                            </tr>
                          </tbody>

                        </table>
                        </div>
                        </div>

                        {/* <div className='d-flex flex-column ailgn-items-center'>
                          <h4 class="card-title language">Language</h4>
                          <h5 className='mb-5 mt-0 ml-2 p-3'> {repo.language}</h5>

                        </div>



                        <div className='ml-1 w-100'>
                          <div className='d-flex  flex-column ailgn-items-center'>
                            <h4 class="card-title language">Watchers Count</h4>
                            <h5 className='mb-5 mt-0 ml-2 p-3'> {repo.watchers_count}</h5>

                          </div>

                        </div>


                        <div className='ml-1 w-100'>
                          <div className='d-flex flex-column ailgn-items-center'>
                            <h4 class="card-title language">Created At</h4>
                            <h5 className='mb-5 mt-0 ml-2 p-3'> {repo.created_at}</h5>

                          </div>


                        </div>




                        <div className='ml-1 w-100'>
                          <div className='d-flex  flex-column ailgn-items-center'>
                            <h4 class="card-title language">Updated At</h4>
                            <h5 className='mb-5 mt-0 ml-2 p-3'> {repo.updated_at}</h5>

                          </div>


                        </div> */}








                        {/* </div> */}
                      </div>
                    
                  </div>


                </div>

              </div>

            </div>
          </div>


          {/* repositoty */}
          {/* 
      <div className='container'>
        <div>
          {repository.map((repo)=>(
            <div>
              <div>{repo.id}</div>
            </div>
          ))}
        </div>
      </div> */}


        </div>

      </div>}




    </div>
  )
}


