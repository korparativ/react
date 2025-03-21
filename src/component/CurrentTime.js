function CurrentTime() {
    const currentTime = new Date;
    return (
        <div>
            <h2>Текущее время: {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit"})}</h2>
            <h2>Дата: {currentTime.toLocaleDateString("en-Gb")}</h2>
        </div>
     );
}

export default CurrentTime;