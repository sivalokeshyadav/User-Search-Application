import './index.css'

const UserProfile = props => {
  const {userDetails, deleteUser} = props
  const {imageUrl, name, role, uniqueNo} = userDetails
  const onDelete = () => {
    deleteUser(uniqueNo)
  }
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
      <div>
        <button
          className="delete-icon delete-button"
          onClick={onDelete}
          type="button"
        >
          <img
            src="http://assets.ccbp.in/frontend/react-js/cross-img.png"
            alt="cross"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}
export default UserProfile
