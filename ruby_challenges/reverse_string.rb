class Reverse
    attr_accessor :newArray
    
    # stores the input as instance variable @string, 
    # creates newArray, which will store the final product
    def initialize(string)
      @string = string
      @newArray = []
    end
  
    # method to be called on new instance
    def reverse
        # .chars turns string into an array of characters
        array = @string.chars
        # set initial index start
        start_index = 0
        # set inital index end, the last letter
        end_index = array.length - 1

        # the loop
        while start_index < end_index
            # stores first index in 'temp'
            temp = array[start_index]
            # swaps the start with end
            array[start_index] = array[end_index]
            # 'places' the start_index in space of the end_index
            array[end_index] = temp
            # moves the start up one index
            start_index +=1
            # moves the last down one index
            end_index -= 1
        end
        
        @newArray = array
    end
  end

reverse_obj = Reverse.new("Hello Woild")
reverse_obj.reverse
p reverse_obj.newArray