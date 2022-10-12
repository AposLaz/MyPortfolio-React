import React from 'react'

function EditCard() {
  return (
    <div className='edit-card'>
        <div className="blog-card">
          <div className="meta">
            <a href="https://link.springer.com/chapter/10.1007/978-3-030-99584-3_10" target="_blank" rel="noreferrer noopener">
              <div className="photo" style={{backgroundImage: 'url(https://lebaneselibraryassociation.org/wp-content/uploads/2021/05/springer-logo_image-LLA-1.png)'}}></div>
            </a>
          </div>
          <div className="description">
            <h1>Open-Source Publish-Subscribe Systems: A Comparative Study</h1>
            <h2>First Online: 31 March 2022</h2>
            <p> 
            Publish-subscribe systems handle a wealth of information that is transmitted around the world via the Internet. 
            In a real-case scenario, an academic conference takes place to discuss advances in various fields ... 
            <span className='read-more'> 
                  <a href="https://link.springer.com/chapter/10.1007/978-3-030-99584-3_10" target="_blank" rel="noreferrer noopener"> Read More</a>
              </span>
            </p>
      
          </div>
        </div>
        <div className="blog-card alt">
          <div className="meta">
            <a href="https://www.sciencedirect.com/science/article/pii/S2542660522000403" target="_blank" rel="noreferrer noopener">
              <div className="photo" style={{backgroundImage: 'url(https://library.stlawu.edu/sites/default/files/2020-06/science_direct.png)'}}></div>
            </a>
          </div>
          <div className="description">
            <h1>Publish–Subscribe approaches for the IoT and the cloud: Functional and performance evaluation of open-source systems</h1>
            <h2>First Online: 10 May 2022</h2>
            <p>In Publish–Subscribe communication, the publisher is the service that publishes messages (e.g. events) 
              and the subscriber is the one that receives them. These two services operate ... 
              <span className='read-more'>
                  <a href="https://www.sciencedirect.com/science/article/pii/S2542660522000403" target="_blank" rel="noreferrer noopener"> Read More</a>
              </span>
            </p>
          </div>
        </div>
    </div>
  )
}

export default EditCard