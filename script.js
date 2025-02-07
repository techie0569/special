document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Collect inputs
    const color = document.getElementById('color').value;
    const hobby = document.getElementById('hobby').value;
    const memory = document.getElementById('memory').value;

    // Debugging output
    console.log('Color:', color);
    console.log('Hobby:', hobby);
    console.log('Memory:', memory);

    // Check if all inputs are filled
    if (!color || !hobby || !memory) {
        alert("Please fill in all the fields!");
        return;
    }

    // Generate love message
    const poem = `
        My love for you is as deep as the color ${color}.
        I cherish every moment we spend together, especially when we share our love for ${hobby}.
        I’ll never forget the memory of us sharing that beautiful moment: "${memory}".
        
        Together, we’re like a perfect algorithm, with each line of code creating something beautiful and unique.
        
        Happy Rose Day, my love! 💖
    `;

    // Debugging output
    console.log('Generated Poem:', poem);

    // Display result
    document.getElementById('poem').innerText = poem;

    // Change background color based on her favorite color
    document.body.style.backgroundColor = color;

    // Show the result section
    document.getElementById('result').classList.remove('hidden');
});
