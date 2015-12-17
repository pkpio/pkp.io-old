# Plugin to make raw content visible for front end template
module Jekyll

  class RawContent < Generator

    def generate(site)
      site.posts.each do |post|
        post.data['raw_content'] = post.content
      end
    end
  
  end

end

