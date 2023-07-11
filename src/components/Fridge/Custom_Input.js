// import {
//     View,
//     Text,
//     TouchableOpacity,
//     Image,
//     TextInput,
//     FlatList
//   } from 'react-native';
//   import React, {useRef, useState, useEffect} from 'react';
//   import { SCREEN_HEIGHT,SCREEN_WIDTH } from '../../constants/Screen';
//   import menus from '../shared/temp_data';

//   const categories = ["Fruits","Vegetables","Beverages","Meat & Chicken","Fish & Sea Food","Dairy & Eggs","Cereal Food","Others"];

//   const CustomInput = ({value,Combine}) => {
//     const {selectedValue1,selectedValue2,selectedValue3,setSelectedValue1,setSelectedValue2,setSelectedValue3} = Combine;

//     const [search, setSearch] = useState('');
//     const [clicked, setClicked] = useState(false);
//     const [data, setData] = useState(categories);
//     // const [selectedValue, setSelectedValue] = useState('');

//     useEffect(() => {
//       if(value == 'name')
//       {
//         let tempData = menus.filter((item,index) => item.type == selectedValue1)
//         setData(tempData);
//       }
//     }, []);
    
//     const searchRef = useRef();
//     const onSearch = search => {
//       if (search !== '') {
//         let tempData = categories.filter(item => {
//           return item.toLowerCase().indexOf(search.toLowerCase()) > -1;
//         });
//         setData(tempData);
//       } else {
//         setData(categories);
//       }
//     };
//     return (
//       <View style={{width: '94%',zIndex: clicked?2:1}}>
//         <TouchableOpacity
//           style={{
//             width: '90%',
//             height: 50,
//             borderRadius: 10,
//             borderWidth: 0.5,
//             alignSelf: 'center',
//             marginTop: 10,
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             paddingLeft: 15,
//             paddingRight: 15,
//           }}
//           onPress={() => {
//             setClicked(!clicked);
//           }}>
//           <Text style={{fontWeight:'600'}}>
//             {selectedValue1 == '' ? (value == 'type' ? 'Select Category' : (value == 'name' ? 'Select Name' : 'Select Expiry')) : selectedValue1}
//           </Text>
//           {clicked ? (
//             <Image
//               source={require('../../../assets/images/upload.png')}
//               style={{width: 20, height: 20}}
//             />
//           ) : (
//             <Image
//               source={require('../../../assets/images/dropdown.png')}
//               style={{width: 20, height: 20}}
//             />
//           )}
//         </TouchableOpacity>
//         {clicked ? (
//           <View
//             style={{    
//               position:'absolute',      
//               elevation: 5,
//               marginTop: 70,
//               height: 280,
//               alignSelf: 'center',
//               width: '90%',
//               backgroundColor: '#fff',
//               borderRadius: 10,
//             }}>
//             <TextInput
//               placeholder="Search.."
//               value={search}
//               ref={searchRef}
//               onChangeText={txt => {
//                 onSearch(txt);
//                 setSearch(txt);
//               }}
//               style={{
//                 width: '90%',
//                 height: 50,
//                 alignSelf: 'center',
//                 borderWidth: 0.2,
//                 borderColor: '#8e8e8e',
//                 borderRadius: 7,
//                 marginTop: 12,
//                 paddingLeft: 20,
//               }}
//             />

//             <FlatList
//               showsVerticalScrollIndicator={true}
//               data={data}
//               renderItem={({item, index}) => {
//                   return (
//                       <TouchableOpacity
//                       style={{ 
//                           width: '85%',
//                           alignSelf: 'center',
//                           height: 50,
//                           justifyContent: 'center',
//                           borderBottomWidth: 0.5,
//                           borderColor: '#8e8e8e',
//                         }}
//                         onPress={() => {
//                             if(value == 'type')
//                               setSelectedValue1(item);
//                             else if(value == 'name')
//                               setSelectedValue2(item);
//                             else 
//                               setSelectedValue3(item);  

//                             setClicked(!clicked);
//                             onSearch('');
//                             setSearch('');
//                         }}>
//                     <Text style={{fontWeight: '600'}}>{item}</Text>
//                   </TouchableOpacity>
//                 );
//             }}
//             />
//           </View>
//         ) : null}
//       </View>
//     );
// };

//   export default CustomInput;