import { MASTER_URL } from '@env';
import { request, gql } from 'graphql-request'
import { Robot } from '../../types';

const getSlider=async ()=>{
  const query = gql`
  query getSlider {
    sliders {
      id
      name
      image {
        url
      }
    }
  }
  `
const result:any = await request(MASTER_URL, query);
return result
}

const getCategory = async ()=>{
  const query = gql`
  query getCategory {
    categories {
      id
      image {
        url
      }
      type
    }
  }
  `

  const result:any = await request(MASTER_URL, query);
  return result
}

const getRobot = async () =>{
  const query = gql`
  query getRobot {
    robots {
      cost
      email
      id
      images {
        url
      }
      name
      about
      contactPerson
      category {
        type
      }
    }
  }
  `

  const result:any = await request(MASTER_URL, query);
  return result
}

const getReview = async ()=>{
  const query = gql`
  query getReview {
    reviews {
      id
      name
      comment
      rating
      date
      robot {
        name
      }
    }
  }
  `

  const result:any = await request(MASTER_URL, query);
  return result
}

const getRobotByCategory = async(category:string)=>{
  const query=gql`
  query getRobotCategory {
    robots(where: {category: {type: "`+category+`"}}) {
      cost
      about
      contactPerson
      email
      id
      name
      images {
        url
      }
      category {
        type
      }
    }
  }
  `

  const result:any = await request(MASTER_URL, query);
  return result
}

const getRobotById = async(id:string)=>{
  const query = gql`
  query getRobotId {
    robot(where: {id: "`+id+`"}) {
      name
      email
      cost
      about
      contactPerson
      category {
        type
      }
      images {
        url
      }
    }
  }
  `
  const result:any = await request(MASTER_URL, query);
  return result
}

const getReviewByRobot = async(id:string)=>{
  const query = gql`
  query getReviewByRobot {
    reviews(where: {robot: {id: "`+id+`"}}) {
      id
      date
      rating
      name
      comment
    }
  }
  `
  const result:any = await request(MASTER_URL, query);
  return result
}

export default {
  getSlider, getCategory, getRobot, getReview, getRobotByCategory,
  getRobotById, getReviewByRobot,
}
