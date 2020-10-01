import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from "../utils/authors"
import { Card, CardText, CardBody, CardTitle, Button, Row} from "reactstrap"
import AndrewImage from "../images/banksy-rat.jpg"
import VasyaImage from "../images/bansky-rat-2.jpg"
import { slugify } from "../utils/slugify"
import Img from "gatsby-image"

const TeamPage = () => (
  <Layout pageTitle="Our Team">
    <SEO title="Team" keywords={["gatsby", "application", "react"]} />
    <Row className="mb-4">
      <div className="col-md-3">
        <Img
          src={AndrewImage}
          style={{ maxWidth: "100%" }}
          alt="John profile"
        />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button className="text-uppercase" color='primary' href={`/author/${slugify(authors[0].name)}`}>View posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
        <Img
          src={VasyaImage}
          style={{ maxWidth: "100%" }}
          alt="John profile"
        />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[1].name}</CardTitle>
            <CardText>{authors[1].bio}</CardText>
            <Button className="text-uppercase" color='primary' href={`/author/${slugify(authors[1].name)}`}>View posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
