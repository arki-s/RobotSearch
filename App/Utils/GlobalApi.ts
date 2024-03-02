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
      booking {
        robot {
          name
        }
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
    reviews(where: {booking: {robot: {id: "`+id+`"}}}) {
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

const deleteBooking = async(id:string) =>{
  const mutationQuery = gql`
  mutation MyMutation {
    deleteBooking(where: {id: "`+id+`"}) {
      id
      userEmail
      totalFee
      startDate
      days
      completed
      comment
    }
  }
  `
  const result:any = await request(MASTER_URL, mutationQuery);
  return result
}

const autoUpdateBooking = async(id:string) =>{
  const mutationQuery = gql`
  mutation MyMutation {
    updateManyBookings(data: {completed: true}, where: {id: ""})
  }
  `

  const result:any = await request(MASTER_URL, mutationQuery);
  return result
}

const createReview = async(name:string, date:string, rating:number, comment:string, userEmail:string, robotId:string)=>{
  const mutationQuery = gql`
  mutation createReview {
    createReview(
      data: {
        name: "`+name+`",
        date: "`+date+`",
        rating: `+rating+`,
        comment: "`+comment+`",
        userEmail: "`+userEmail+`",
        robot: {connect: {id: "`+robotId+`"}}}
    ) {
      id
    }
    publishManyReviews(to: PUBLISHED) {
      count
    }
  }
  `
  const result:any = await request(MASTER_URL, mutationQuery);
  return result
}

const getReviewsDone = async(userEmail:string)=>{
  const query = gql`
  query getReviewsDone {
    reviews(where: {userEmail: "`+userEmail+`"}) {
      booking {
        id
      }
    }
  }
  `

  const result:any = await request(MASTER_URL, query);
  return result
}

const getAllRobots = async()=>{
  const query = gql`
  query getAllRobots {
    robots {
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

const getSearchedRobots = async(searchWord:string)=>{
  const query = gql`
  query getRobotCategory {
    robots(
      where: {name_contains: "`+searchWord+`"}
    ) {
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

export default {
  getSlider, getCategory, getRobot, getReview, getRobotByCategory,
  getRobotById, getReviewByRobot, createBooking, getNotCompletedBooking,
  getCompletedBooking, deleteBooking, autoUpdateBooking, createReview,
  getReviewsDone, getAllRobots, getSearchedRobots
}
