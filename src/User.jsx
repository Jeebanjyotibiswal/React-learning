import React from 'react'
// jsx props
function User({children="Default User"}) {
  return (
    <div>User :{children}</div>
  )
}

export default User