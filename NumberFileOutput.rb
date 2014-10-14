class NumberFileOutput
  @width = 70 # 70 actual characters per line
  @leftPadding = 5  # 5 white spaces on left side of a line
  @rightPadding = 5 # 5 white spaces on right side of a line
   
   def initialize (width, leftPadding, rightPadding)
     @width = width
	 @rightPadding = rightPadding
	 @leftPadding = leftPadding
   end
   
  def format (filename, strContent)
    actualWidth = @width + @leftPadding + @rightPadding
	length = strContent.length
	
	counter = length / @width
	
	reminder = length % @width
		
	File.open(filename, 'w+') do |f1|  

	  for loop in 1..counter do
	
	  centralPart = strContent[(loop - 1) * @width, @width]
		
	  oneLine = ' ' * @leftPadding +
  	    centralPart + ' ' * @rightPadding
	
	  f1.puts oneLine	
	  
	  end
	
	
	
	  # handle the last line
	  if  reminder > 0
	  	tail = strContent[counter * @width, reminder]
		lastLine = ' ' * @leftPadding +
  	    tail
		
		f1.puts lastLine
	  end # if statement
	  
	  f1.close
	  
	end  # File.open()
	
  end # format method
  
end # end of the class definition

  