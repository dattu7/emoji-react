import React,{useState} from 'react'
const emojiData=[{
    id: 1,
    symbol: "😃",
    name: "Grinning Face"
},
{
    id: 2,
    symbol: "😭",
    name : "cry"
},
{
    id :3,
    symbol: "😎",
    name: 'chill'
},
{
    id :4,
    symbol :'😍',
    name :'love'
},
{
    id :5,
    symbol :'❤',
    name :'love'
},
{
    id :6,
    symbol :'👨‍🦱',
    name :'pavan'
}];
function EmojiSearch() {
    const [searchEmoji,setSearchEmoji] = useState("");
    const handleChange=(e)=>{
        setSearchEmoji(e.target.value);
    }
    const showEmoji =emojiData.filter((emoji)=>{
        const emojiName=emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase())
    });
  return (
    <div>
        <h1>React Emoji App!!!</h1>
        <input type='text' placeholder='Search for an emoji' onChange={handleChange}></input>
        <div>
            {showEmoji.map((emoji)=>emoji.symbol)}
        </div>
    </div>
  )
}

export default EmojiSearch