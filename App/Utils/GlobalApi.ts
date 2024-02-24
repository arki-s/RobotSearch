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

const createBooking = async(userEmail:string, date:Date, days:number, fee:number, comment:string, robotId:string)=>{
  const mutationQuery = gql`
  mutation createBooking {
    createBooking(
      data: {userEmail: "`+userEmail+`",
        startDate: "`+date+`",
        days: `+days+`,
        totalFee: `+fee+`,
        comment: "`+comment+`",
        completed: false,
        robot: {connect: {id: "`+robotId+`"}}}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }
  }
  `

  const result:any = await request(MASTER_URL, mutationQuery);
  return result
}

const getNotCompletedBooking = async(userEmail:string)=>{
  const query = gql`
  query getBookingNotCompleted {
    bookings(where: {userEmail: "`+userEmail+`", completed: false}) {
      id
      startDate
      days
      totalFee
      comment
      robot {
        id
        name
        contactPerson
        email
        images {
          url
        }
      }
    }
  }
  `

  const result:any = await request(MASTER_URL, query);
  return result
}

const getCompletedBooking = async(userEmail:string)=>{
  const query = gql`
  query getBookingNotCompleted {
    bookings(where: {userEmail: "`+userEmail+`", completed: true}) {
      id
      startDate
      days
      totalFee
      comment
      robot {
        id
        name
        contactPerson
        email
        images {
          url
        }
      }
    }
  }
  `

  const result:any = await request(MASTER_URL, query);
  return result
}




export default {
  getSlider, getCategory, getRobot, getReview, getRobotByCategory,
  getRobotById, getReviewByRobot, createBooking, getNotCompletedBooking,
  getCompletedBooking,
}
