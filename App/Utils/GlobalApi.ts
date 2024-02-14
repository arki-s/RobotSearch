import { MASTER_URL } from '@env';
import { request, gql } from 'graphql-request'

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
  const query = `
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

export default {
  getSlider, getCategory,
}
