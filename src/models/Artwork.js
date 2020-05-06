module.exports = {
    name: "Artwork",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "string"
        },
        part_arc_season: {
            type: "string"
        },
        chapter_episode: {
            type: "string"
        },
        type: {
            type: "string"
        },
        user_id: {
            type: "string"
        }
    }
}