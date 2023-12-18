import './index.css'

const TechnologyCard = props => {
  const {techDetails} = props
  const {title, description, imgUrl, className} = techDetails

  return (
    <li className={className}>
      <div>
        <h1 className="head-text">{title}</h1>
        <p className="des-text">{description}</p>
        <div className="img-container">
          <img src={imgUrl} alt={title} className="img-card" />
        </div>
      </div>
    </li>
  )
}

export default TechnologyCard
