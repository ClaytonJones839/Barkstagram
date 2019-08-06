@comments.each do |comment|
    json.set! comment.id do
        json.partial! 'comment', commment: comment
    end
end