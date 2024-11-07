const dotenv = require('dotenv');
dotenv.config();
// const {Configuration, openAIApi}= require('openai')
// const config= new Configuration({
//     apiKey: process.env.VITE_OPENAI_API_KEY,
// })
// const openai= new openAIApi(config);
const OpenAi= require('openai');
const ResumeScore= async (req, res) => {
    // const { resumeText, jobDescription } = req.body
    // try {
    //   const response = await openaiApi.createChatCompletion({
    //     model: "gpt-4", 
    //     messages: [
    //       {
    //         role: "system",
    //         content: "You are an ATS analyzer. Score resumes based on how well they match the given job description.",
    //       },
    //       {
    //         role: "user",
    //         content: `Job Description: ${jobDescription}\nResume: ${resumeText}\nGive an ATS score out of 100 based on the relevance.`,
    //       },
    //     ],
    //   })
    //   const atsScore = response.data.choices[0].message.content;

    //   res.status(200).json({ score: atsScore });
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ error: 'Failed to score resume' });
    // }
    const openai = new OpenAi({ apiKey: process.env.VITE_OPENAI_API_KEY });
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",  
            messages: [
                { "role": "user", "content": "Provide me with a short philosophical joke" }
            ],
            max_tokens: 30
        });
        res.status(200).send(completion);
    } catch (error) {
        console.log(error);
        setTimeout(()=>{},2000)
        res.status(500).send('error in the model token usage');
    }
}

module.exports = {
    ResumeScore
}        