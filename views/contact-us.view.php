<!-- HTML DOCTYPE and Links -->
<?php require base_path('views/partials/head.php') ?>

<!-- Cookies Consent Here -->
<?php require('partials/cookies.php') ?>

<div id="container">
  <div class="header">  

    <!-- Header Bar Here -->
    <?php require('partials/header.php') ?>

  </div>
  <div id="open-sidebar">
  </div>
  <div class="body">
    <div class="breadcrumb-container">
      <div class="container">
        <ul class="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            Our Offices
          </li>
        </ul>
      </div>
    </div>      
    <div class="top">
      <div class="page-head">
        <div class="container">
          <h1>Our Offices</h1>
        </div>
      </div>
    </div>
    <div class="offices">
      <div class="office-list container">
        <div class="office-row">
          <?php foreach ($offices as $office) : ?>
            <div class="office">
              <div class="block">
                <div class="img-container">
                  <a href="/contact-us"></a>
                  <img src="<?= $office['image'] ?>" alt="Bespoke Software">
                </div>
                <div class="office-details">
                  <h2><?= $office['office'] ?></h2>
                  <p><?= $office['address'] ?></p>
                  <div class="tel">
                    <a class="h3 text-web" href="tel:#"><?= $office['contact'] ?></a>
                  </div>
                  <div class="view-more">
                    <a class="btn btn-web" href="/">View More</a>
                  </div>
                </div>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
    
    <div class="contact-section">
      <div class="contact-row container">

        <div class="contact-form">
          <form id="form" method="POST" action="/contact-us">
            <div class="<?= $errors['success'] ?? '' ?>">
              <?php if (isset($errors['success'])) : ?>
                <?= $success ?>
              <?php endif; ?>
            </div>
            <div class="input-row">
              <div class="text-input">
                <div class="form-group">
                  <div class="input">
                    <label class="required" for="name">Your Name</label>
                    <input type="text" class="form-control <?= $errors['name'] ?? '' ?>" name="name" id="name">
                  </div>
                </div>
              </div>

              <div class="text-input">
                <div class="form-group">
                  <div class="input">
                    <label for="company_name">Company Name</label>
                    <input type="text" class="form-control" name="company_name" id="company">
                  </div>
                </div>
              </div>

              <div class="text-input">
                <div class="form-group">
                  <div class="input">
                    <label class="required" for="email">Your Email</label>
                    <input type="text" class="form-control <?= $errors['email'] ?? '' ?>" name="email" id="email">
                  </div>
                </div>
              </div>

              <div class="text-input">
                <div class="form-group">
                  <div class="input">
                    <label class="required" for="phone">Your Telephone Number</label>
                    <input type="text" class="form-control <?= $errors['phone'] ?? '' ?>" name="phone" id="phone">
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="input">
                <label class="required" for="message">Message</label>
                <textarea name="message" class="form-control <?= $errors['message'] ?? '' ?>" id="message"></textarea>
              </div>
            </div>

            <div class="form-group">
              <div class="tickbox">
                <label class="checkbox">
                  <span class="media">
                    <span class="media-left checkbox-left">
                      <span class="button">
                        <span class="check-active"></span>
                      </span>
                    </span>
                    <span class="media-body">
                      Please tick this box if you wish to receive marketing information from us. Please see our <a href="/contact-us">Privacy Policy</a> for more information on how we keep your data safe.
                    </span>
                  </span>
                </label>
              </div>
            </div>
            
            <div class="button-block">
              <button id="enquire" type="submit">Send Enquiry</button>
              <small class="helper-text">
                <span class="text-danger">*</span>
                Fields Required
              </small>
            </div>
          </form>

        </div>
        <div class="contact-info">
          <p>Email us on:</p>
          <p><a href="mailto:#">sales@netmatters.com</a></p>
          <p>Speak to Sales on:</p>
          <p><a href="tel:#">01603 515007</a></p>
          <p>Business Hours</p>
          <p>Monday - Friday 07:00 - 18:00</p>
          <div class="out-of-hours">
            <a class="dropdown-answers">
              <h4>
                <p>
                  Out of Hours IT Support
                  <i class="fas fa-angle-right dropdown"></i>
                </p>
              </h4>
            </a>
            <div class="answers">
              <p>Netmatters IT are offering an Out of Hours service for Emergency and Critical tasks.</p>
              <p>
                <strong>Monday - Friday 18:00 - 22:00 Saturday</strong>
                <strong>08:00 - 16:00</strong><br>
                <strong>Sunday 10:00 - 18:00</strong>
              </p>
              <p>To log a critical task, you will need to call our main line number and select Option 2 to leave an Out of Hours  voicemail. A technician will contact you on the number provided within 45 minutes of your call. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer Here -->
  <?php require('partials/footer.php') ?>

  
  <!-- Sticky Header Here -->
  <?php require('partials/sticky.php') ?>

</div>

  <!-- Sidebar Here -->
  <?php require('partials/sidebar.php') ?>


  <script src="/js/jquery-1.11.2.min.js"></script>
  <script src="/js/OwlCarousel2-2.3.4/dist/owl.carousel.min.js"></script>
  <script src="/js/animsition/jquery.animsition.min.js"></script>
  <script src="/js/sticky/jquery.sticky.js"></script>
  <script src="/js/slick/slick.min.js"></script>
  <script src="/js/main.js"></script>

</body>
</html>