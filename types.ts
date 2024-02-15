export type RootStackParamList = {
  Overview:undefined;
  Home:undefined;
  Robots:undefined;
  Booking:undefined;
  Profile:undefined;
  RobotListByCategory:{category: string | undefined; };
  Categories:undefined;
}

export type Robot = {
  id:string;
  name:string;
  cost:string;
  contactPerson:string;
  email:string;
  about:string;
  images:[{url:string}];
  category:{type:string};
}
