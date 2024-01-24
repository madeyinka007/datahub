import { ACTION_TYPES } from '../types'

export const initial_state = {
   loading: false,
   data:{
      "firstname":"",
      "lastname":"",
      "email":"",
      "plan":""
   },
   error:false,
   success:false
}

export const agent_initial = {
   loading:false,
   error:false,
   message:'',
   data: {
      firstname:"",
      lastname:"",
      email:"",
      phone:""
   }
}

export const quote_initial = {
   loading:false,
   error:false,
   success:false,
   data: {
      firstname:"",
      lastname:"",
      email:"",
      phone:"",
      service:""
   }
}

export const contact_initial = {
   loading:false,
   error: false,
   message:'',
   data: {
      name:'',
      email:'',
      subject:'',
      msg:''
   }
}

export const PlanReducer = (state, action) => {
    switch (action.type) {
      case ACTION_TYPES.PLAN_FIELD:
         return {
            ...state,
            data: {...state.data, [action.payload.name]:action.payload.value, 'plan':action.payload.plan}
         }
      case ACTION_TYPES.PLAN_START: 
         return {
            loading:true,
            data:{},
            error:false,
            success:false
         }
      case ACTION_TYPES.PLAN_SUCCESS:
         return {
            ...state,
            loading:false,
            data:action.payload,
            success:true
         }
      case ACTION_TYPES.PLAN_ERROR:
         return {
            ...state,
            error:true,
            loading:false   
         }
      default:
         return state
   }
}

export const AgentReducer = (state, action) => {
   switch (action.type){
      case ACTION_TYPES.AGENT_FIELD:
         return {
            ...state,
            data: {...state.data, [action.payload.name]:action.payload.value}
         }
      case ACTION_TYPES.AGENT_START:
         return {
            ...state,
            loading:true,
            error:false,
            message:''
         }
      case ACTION_TYPES.AGENT_SUCCESS:
         return {
            ...state,
            loading:false,
            message:'Success! Check your mailbox for verification message.',
            data:{
               firstname:'',
               lastname:'',
               email:'',
               phone:''
            }
         }
      case ACTION_TYPES.AGENT_ERROR:
         return {
            ...state,
            loading:false,
            error:true,
            message:'Error Encountered'
         }
      default:
         return state
   }
}

export const QuoteReducer = (state, action) => {
   switch(action.type) {
      case ACTION_TYPES.QUOTE_FIELD:
         return {
            ...state,
            data: {...state.data, [action.payload.name]:action.payload.value}
         }
      case ACTION_TYPES.QUOTE_START:
         return {
            ...state,
            loading:true
         }
      case ACTION_TYPES.QUOTE_SUCCESS:
         return {
            ...state,
            loading:false,
            success:true,
            data:{
               firstname:'',
               lastname:'',
               email:'',
               phone:'',
               service:''
            }
         }
      case ACTION_TYPES.QUOTE_ERROR:
         return {
            ...state,
            loading:false,
            error:true
         }
      default: 
         return state
   }
}

export const ContactReducer = (state, action) => {
   switch(action.type){
      case ACTION_TYPES.CONTACT_FIELD:
         return {
            ...state,
            data: {...state.data, [action.payload.name]:action.payload.value}
         }
      case ACTION_TYPES.CONTACT_START:
         return {
            ...state,
            loading:true
         }
      case ACTION_TYPES.CONTACT_SUCCESS:
         return {
            ...state,
            loading:false,
            message:'Thank you for contacting us.',
            data: {
               name:'',
               email:'',
               subject:'',
               msg:''
            }
         }
      case ACTION_TYPES.CONTACT_ERROR:
         return {
            ...state,
            error:true,
            loading:false,
            message:'Something went wrong. Try again later'
         }
      default:
         return state
   }
}
