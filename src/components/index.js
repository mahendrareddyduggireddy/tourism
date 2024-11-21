import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {UnList, Container, List, Heading, Image, Para} from './styledComponents'

class Tourism extends Component {
  state = {placesList: [], isLoading: true}

  componentDidMount() {
    this.dataCall()
  }

  dataCall = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    console.log(data)
    const updatedData = data.packages.map(each => ({
      id: each.id,
      imageUrl: each.image_url,
      name: each.name,
      description: each.description,
    }))
    this.setState({placesList: updatedData, isLoading: false})
  }

  render() {
    const {placesList, isLoading} = this.state
    console.log(placesList)
    return (
      <Container>
        <Heading>Travel Guide</Heading>
        <UnList>
          {isLoading ? (
            <div data-testid="loader">
              <Loader
                type="TailSpin"
                color="#00BFFF"
                height={50}
                width={50}
                text-center
              />
            </div>
          ) : (
            placesList.map(each => (
              <List key={each.id}>
                <Image src={each.imageUrl} alt={each.name} />
                <Para>{each.description}</Para>
              </List>
            ))
          )}
        </UnList>
        )
      </Container>
    )
  }
}
export default Tourism
